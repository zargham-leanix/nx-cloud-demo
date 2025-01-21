import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib91Demo25Component } from './lib91-demo25.component';

describe('Lib91Demo25Component', () => {
  let component: Lib91Demo25Component;
  let fixture: ComponentFixture<Lib91Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib91Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib91Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
