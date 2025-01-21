import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib43Demo44Component } from './lib43-demo44.component';

describe('Lib43Demo44Component', () => {
  let component: Lib43Demo44Component;
  let fixture: ComponentFixture<Lib43Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib43Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib43Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
