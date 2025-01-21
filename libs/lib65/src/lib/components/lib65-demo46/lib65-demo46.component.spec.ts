import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib65Demo46Component } from './lib65-demo46.component';

describe('Lib65Demo46Component', () => {
  let component: Lib65Demo46Component;
  let fixture: ComponentFixture<Lib65Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib65Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib65Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
