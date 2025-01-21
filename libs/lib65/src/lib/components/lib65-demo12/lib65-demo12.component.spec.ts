import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib65Demo12Component } from './lib65-demo12.component';

describe('Lib65Demo12Component', () => {
  let component: Lib65Demo12Component;
  let fixture: ComponentFixture<Lib65Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib65Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib65Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
