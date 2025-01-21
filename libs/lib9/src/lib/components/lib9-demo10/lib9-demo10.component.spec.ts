import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib9Demo10Component } from './lib9-demo10.component';

describe('Lib9Demo10Component', () => {
  let component: Lib9Demo10Component;
  let fixture: ComponentFixture<Lib9Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib9Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib9Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
