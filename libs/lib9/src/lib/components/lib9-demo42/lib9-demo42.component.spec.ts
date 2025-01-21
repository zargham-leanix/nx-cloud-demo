import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib9Demo42Component } from './lib9-demo42.component';

describe('Lib9Demo42Component', () => {
  let component: Lib9Demo42Component;
  let fixture: ComponentFixture<Lib9Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib9Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib9Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
