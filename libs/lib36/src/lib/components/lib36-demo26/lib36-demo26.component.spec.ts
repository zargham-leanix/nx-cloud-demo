import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib36Demo26Component } from './lib36-demo26.component';

describe('Lib36Demo26Component', () => {
  let component: Lib36Demo26Component;
  let fixture: ComponentFixture<Lib36Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib36Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib36Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
