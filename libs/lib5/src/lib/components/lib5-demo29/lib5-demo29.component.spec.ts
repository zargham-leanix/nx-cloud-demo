import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib5Demo29Component } from './lib5-demo29.component';

describe('Lib5Demo29Component', () => {
  let component: Lib5Demo29Component;
  let fixture: ComponentFixture<Lib5Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib5Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib5Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
