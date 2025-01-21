import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib7Demo27Component } from './lib7-demo27.component';

describe('Lib7Demo27Component', () => {
  let component: Lib7Demo27Component;
  let fixture: ComponentFixture<Lib7Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib7Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib7Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
