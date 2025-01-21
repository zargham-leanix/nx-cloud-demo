import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib9Demo40Component } from './lib9-demo40.component';

describe('Lib9Demo40Component', () => {
  let component: Lib9Demo40Component;
  let fixture: ComponentFixture<Lib9Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib9Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib9Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
