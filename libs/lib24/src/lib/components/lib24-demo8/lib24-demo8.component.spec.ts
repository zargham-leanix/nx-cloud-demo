import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib24Demo8Component } from './lib24-demo8.component';

describe('Lib24Demo8Component', () => {
  let component: Lib24Demo8Component;
  let fixture: ComponentFixture<Lib24Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib24Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib24Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
