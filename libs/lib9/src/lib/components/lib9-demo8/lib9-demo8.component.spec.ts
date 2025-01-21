import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib9Demo8Component } from './lib9-demo8.component';

describe('Lib9Demo8Component', () => {
  let component: Lib9Demo8Component;
  let fixture: ComponentFixture<Lib9Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib9Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib9Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
