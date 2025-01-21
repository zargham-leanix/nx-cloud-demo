import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib86Demo29Component } from './lib86-demo29.component';

describe('Lib86Demo29Component', () => {
  let component: Lib86Demo29Component;
  let fixture: ComponentFixture<Lib86Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib86Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib86Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
