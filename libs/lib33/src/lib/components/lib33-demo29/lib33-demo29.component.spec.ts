import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib33Demo29Component } from './lib33-demo29.component';

describe('Lib33Demo29Component', () => {
  let component: Lib33Demo29Component;
  let fixture: ComponentFixture<Lib33Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib33Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib33Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
