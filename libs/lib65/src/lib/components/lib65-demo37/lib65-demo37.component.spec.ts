import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib65Demo37Component } from './lib65-demo37.component';

describe('Lib65Demo37Component', () => {
  let component: Lib65Demo37Component;
  let fixture: ComponentFixture<Lib65Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib65Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib65Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
