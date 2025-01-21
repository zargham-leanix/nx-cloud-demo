import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib79Demo26Component } from './lib79-demo26.component';

describe('Lib79Demo26Component', () => {
  let component: Lib79Demo26Component;
  let fixture: ComponentFixture<Lib79Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib79Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib79Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
