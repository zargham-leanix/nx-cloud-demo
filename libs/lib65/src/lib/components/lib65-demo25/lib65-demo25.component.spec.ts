import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib65Demo25Component } from './lib65-demo25.component';

describe('Lib65Demo25Component', () => {
  let component: Lib65Demo25Component;
  let fixture: ComponentFixture<Lib65Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib65Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib65Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
