import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib65Demo14Component } from './lib65-demo14.component';

describe('Lib65Demo14Component', () => {
  let component: Lib65Demo14Component;
  let fixture: ComponentFixture<Lib65Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib65Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib65Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
