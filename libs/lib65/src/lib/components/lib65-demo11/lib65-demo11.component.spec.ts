import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib65Demo11Component } from './lib65-demo11.component';

describe('Lib65Demo11Component', () => {
  let component: Lib65Demo11Component;
  let fixture: ComponentFixture<Lib65Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib65Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib65Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
