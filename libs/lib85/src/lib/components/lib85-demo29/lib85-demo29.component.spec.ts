import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib85Demo29Component } from './lib85-demo29.component';

describe('Lib85Demo29Component', () => {
  let component: Lib85Demo29Component;
  let fixture: ComponentFixture<Lib85Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib85Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib85Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
