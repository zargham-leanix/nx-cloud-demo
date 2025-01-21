import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib53Demo29Component } from './lib53-demo29.component';

describe('Lib53Demo29Component', () => {
  let component: Lib53Demo29Component;
  let fixture: ComponentFixture<Lib53Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib53Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib53Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
