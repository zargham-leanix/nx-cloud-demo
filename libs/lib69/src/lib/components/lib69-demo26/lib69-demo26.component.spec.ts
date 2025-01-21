import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib69Demo26Component } from './lib69-demo26.component';

describe('Lib69Demo26Component', () => {
  let component: Lib69Demo26Component;
  let fixture: ComponentFixture<Lib69Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib69Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib69Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
