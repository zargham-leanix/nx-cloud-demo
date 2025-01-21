import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib59Demo29Component } from './lib59-demo29.component';

describe('Lib59Demo29Component', () => {
  let component: Lib59Demo29Component;
  let fixture: ComponentFixture<Lib59Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib59Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib59Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
