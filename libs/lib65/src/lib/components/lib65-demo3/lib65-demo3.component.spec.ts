import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib65Demo3Component } from './lib65-demo3.component';

describe('Lib65Demo3Component', () => {
  let component: Lib65Demo3Component;
  let fixture: ComponentFixture<Lib65Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib65Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib65Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
