import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib7Demo26Component } from './lib7-demo26.component';

describe('Lib7Demo26Component', () => {
  let component: Lib7Demo26Component;
  let fixture: ComponentFixture<Lib7Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib7Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib7Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
