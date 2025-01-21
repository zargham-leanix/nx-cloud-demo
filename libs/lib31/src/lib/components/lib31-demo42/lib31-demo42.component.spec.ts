import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib31Demo42Component } from './lib31-demo42.component';

describe('Lib31Demo42Component', () => {
  let component: Lib31Demo42Component;
  let fixture: ComponentFixture<Lib31Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib31Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib31Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
