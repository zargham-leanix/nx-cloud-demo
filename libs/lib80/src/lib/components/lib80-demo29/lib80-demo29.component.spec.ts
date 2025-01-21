import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib80Demo29Component } from './lib80-demo29.component';

describe('Lib80Demo29Component', () => {
  let component: Lib80Demo29Component;
  let fixture: ComponentFixture<Lib80Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib80Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib80Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
