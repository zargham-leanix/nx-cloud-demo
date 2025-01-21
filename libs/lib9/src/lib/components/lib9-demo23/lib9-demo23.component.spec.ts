import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib9Demo23Component } from './lib9-demo23.component';

describe('Lib9Demo23Component', () => {
  let component: Lib9Demo23Component;
  let fixture: ComponentFixture<Lib9Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib9Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib9Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
