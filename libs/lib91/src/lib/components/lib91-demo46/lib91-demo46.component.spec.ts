import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib91Demo46Component } from './lib91-demo46.component';

describe('Lib91Demo46Component', () => {
  let component: Lib91Demo46Component;
  let fixture: ComponentFixture<Lib91Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib91Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib91Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
