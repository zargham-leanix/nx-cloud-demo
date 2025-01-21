import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib24Demo39Component } from './lib24-demo39.component';

describe('Lib24Demo39Component', () => {
  let component: Lib24Demo39Component;
  let fixture: ComponentFixture<Lib24Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib24Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib24Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
