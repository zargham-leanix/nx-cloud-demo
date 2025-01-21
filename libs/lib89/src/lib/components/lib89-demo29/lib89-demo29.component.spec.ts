import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib89Demo29Component } from './lib89-demo29.component';

describe('Lib89Demo29Component', () => {
  let component: Lib89Demo29Component;
  let fixture: ComponentFixture<Lib89Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib89Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib89Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
