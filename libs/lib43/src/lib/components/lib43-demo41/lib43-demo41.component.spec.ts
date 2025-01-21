import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib43Demo41Component } from './lib43-demo41.component';

describe('Lib43Demo41Component', () => {
  let component: Lib43Demo41Component;
  let fixture: ComponentFixture<Lib43Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib43Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib43Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
