import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib65Demo2Component } from './lib65-demo2.component';

describe('Lib65Demo2Component', () => {
  let component: Lib65Demo2Component;
  let fixture: ComponentFixture<Lib65Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib65Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib65Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
