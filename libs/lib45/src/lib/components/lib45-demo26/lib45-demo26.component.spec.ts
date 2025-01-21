import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib45Demo26Component } from './lib45-demo26.component';

describe('Lib45Demo26Component', () => {
  let component: Lib45Demo26Component;
  let fixture: ComponentFixture<Lib45Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib45Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib45Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
