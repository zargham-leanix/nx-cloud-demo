import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib65Demo48Component } from './lib65-demo48.component';

describe('Lib65Demo48Component', () => {
  let component: Lib65Demo48Component;
  let fixture: ComponentFixture<Lib65Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib65Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib65Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
