import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib27Demo29Component } from './lib27-demo29.component';

describe('Lib27Demo29Component', () => {
  let component: Lib27Demo29Component;
  let fixture: ComponentFixture<Lib27Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib27Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib27Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
