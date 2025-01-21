import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib65Demo16Component } from './lib65-demo16.component';

describe('Lib65Demo16Component', () => {
  let component: Lib65Demo16Component;
  let fixture: ComponentFixture<Lib65Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib65Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib65Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
