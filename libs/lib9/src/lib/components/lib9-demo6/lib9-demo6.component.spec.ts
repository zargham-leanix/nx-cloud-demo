import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib9Demo6Component } from './lib9-demo6.component';

describe('Lib9Demo6Component', () => {
  let component: Lib9Demo6Component;
  let fixture: ComponentFixture<Lib9Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib9Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib9Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
