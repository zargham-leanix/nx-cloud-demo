import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib53Demo25Component } from './lib53-demo25.component';

describe('Lib53Demo25Component', () => {
  let component: Lib53Demo25Component;
  let fixture: ComponentFixture<Lib53Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib53Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib53Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
