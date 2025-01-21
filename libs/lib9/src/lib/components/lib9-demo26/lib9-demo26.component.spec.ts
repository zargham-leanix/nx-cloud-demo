import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib9Demo26Component } from './lib9-demo26.component';

describe('Lib9Demo26Component', () => {
  let component: Lib9Demo26Component;
  let fixture: ComponentFixture<Lib9Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib9Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib9Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
