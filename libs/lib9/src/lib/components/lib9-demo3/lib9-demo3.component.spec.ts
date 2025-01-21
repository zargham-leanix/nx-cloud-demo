import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib9Demo3Component } from './lib9-demo3.component';

describe('Lib9Demo3Component', () => {
  let component: Lib9Demo3Component;
  let fixture: ComponentFixture<Lib9Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib9Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib9Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
