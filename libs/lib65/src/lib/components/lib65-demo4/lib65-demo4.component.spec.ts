import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib65Demo4Component } from './lib65-demo4.component';

describe('Lib65Demo4Component', () => {
  let component: Lib65Demo4Component;
  let fixture: ComponentFixture<Lib65Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib65Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib65Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
