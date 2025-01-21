import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib9Demo27Component } from './lib9-demo27.component';

describe('Lib9Demo27Component', () => {
  let component: Lib9Demo27Component;
  let fixture: ComponentFixture<Lib9Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib9Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib9Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
