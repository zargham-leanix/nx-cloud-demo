import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib61Demo29Component } from './lib61-demo29.component';

describe('Lib61Demo29Component', () => {
  let component: Lib61Demo29Component;
  let fixture: ComponentFixture<Lib61Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib61Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib61Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
