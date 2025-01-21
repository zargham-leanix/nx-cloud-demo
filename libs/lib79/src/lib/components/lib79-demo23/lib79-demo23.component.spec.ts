import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib79Demo23Component } from './lib79-demo23.component';

describe('Lib79Demo23Component', () => {
  let component: Lib79Demo23Component;
  let fixture: ComponentFixture<Lib79Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib79Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib79Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
