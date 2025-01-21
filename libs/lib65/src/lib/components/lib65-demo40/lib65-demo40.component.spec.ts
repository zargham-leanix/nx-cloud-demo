import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib65Demo40Component } from './lib65-demo40.component';

describe('Lib65Demo40Component', () => {
  let component: Lib65Demo40Component;
  let fixture: ComponentFixture<Lib65Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib65Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib65Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
