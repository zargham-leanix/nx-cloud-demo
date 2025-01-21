import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib9Demo13Component } from './lib9-demo13.component';

describe('Lib9Demo13Component', () => {
  let component: Lib9Demo13Component;
  let fixture: ComponentFixture<Lib9Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib9Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib9Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
