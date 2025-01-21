import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib94Demo29Component } from './lib94-demo29.component';

describe('Lib94Demo29Component', () => {
  let component: Lib94Demo29Component;
  let fixture: ComponentFixture<Lib94Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib94Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib94Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
