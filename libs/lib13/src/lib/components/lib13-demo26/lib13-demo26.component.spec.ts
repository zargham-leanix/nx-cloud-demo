import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib13Demo26Component } from './lib13-demo26.component';

describe('Lib13Demo26Component', () => {
  let component: Lib13Demo26Component;
  let fixture: ComponentFixture<Lib13Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib13Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib13Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
