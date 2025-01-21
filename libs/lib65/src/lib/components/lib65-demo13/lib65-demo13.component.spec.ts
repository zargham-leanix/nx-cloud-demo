import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib65Demo13Component } from './lib65-demo13.component';

describe('Lib65Demo13Component', () => {
  let component: Lib65Demo13Component;
  let fixture: ComponentFixture<Lib65Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib65Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib65Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
