import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib9Demo17Component } from './lib9-demo17.component';

describe('Lib9Demo17Component', () => {
  let component: Lib9Demo17Component;
  let fixture: ComponentFixture<Lib9Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib9Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib9Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
