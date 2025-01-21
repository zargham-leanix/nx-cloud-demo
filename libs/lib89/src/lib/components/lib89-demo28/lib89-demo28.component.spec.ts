import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib89Demo28Component } from './lib89-demo28.component';

describe('Lib89Demo28Component', () => {
  let component: Lib89Demo28Component;
  let fixture: ComponentFixture<Lib89Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib89Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib89Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
