import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib31Demo44Component } from './lib31-demo44.component';

describe('Lib31Demo44Component', () => {
  let component: Lib31Demo44Component;
  let fixture: ComponentFixture<Lib31Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib31Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib31Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
